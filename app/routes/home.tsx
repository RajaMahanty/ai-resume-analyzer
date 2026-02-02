import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import type { Resume } from "types";
import Navbar from "~/components/Navbar";
import ResumeCard from "~/components/ResumeCard";
import { usePuterStore } from "~/lib/puter";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
	return [
		{ title: "Resumind" },
		{ name: "description", content: "Smart feedback for your dreamjob!" },
	];
}

export default function Home() {
	const { auth, kv } = usePuterStore();
	const navigate = useNavigate();

	const [resumes, setResumes] = useState<Resume[]>([]);
	const [loadingResumes, setLoadingResumes] = useState(false);

	useEffect(() => {
		if (!auth.isAuthenticated) navigate("/auth?next=/");
	}, [auth.isAuthenticated]);

	useEffect(() => {
		const loadResumes = async () => {
			setLoadingResumes(true);
			const resumes = (await kv.list(`resume:*`, true)) as KVItem[];

			const parsedResumes = resumes?.map(
				(resume) => JSON.parse(resume.value) as Resume,
			);

			console.log("Parsed Resumes:", parsedResumes);

			setResumes(parsedResumes || []);
			setLoadingResumes(false);
		};

		loadResumes();
	}, []);

	return (
		<main className="bg-[url(/images/bg-main.svg)] bg-cover">
			<Navbar />
			<section className="main-section">
				<div className="page-heading py-16">
					<h1>Track Your Applications & Resume Ratings</h1>

					{!loadingResumes && resumes.length === 0 ? (
						<h2 className="mt-4 text-gray-600">
							You have no resumes yet. Upload your first resume to get started!
						</h2>
					) : (
						<h2 className="mt-4 text-gray-600">
							Review your submissions and check AI-powered feedback.
						</h2>
					)}
				</div>
				{loadingResumes && (
					<div className="flex flex-col items-center justify-center">
						<img src="/images/resume-scan-2.gif" className="w-50" />
					</div>
				)}

				{!loadingResumes && resumes.length > 0 && (
					<div className="resumes-section">
						{resumes.map((resume) => (
							<ResumeCard key={resume.id} resume={resume} />
						))}
					</div>
				)}

				{!loadingResumes && resumes.length === 0 && (
					<div className="flex flex-col items-center justify-center mt-10 gap-4">
						<Link
							className="primary-button w-fit text-xl font-semibold"
							to="/upload"
						>
							Upload your first resume
						</Link>
					</div>
				)}
			</section>
		</main>
	);
}
