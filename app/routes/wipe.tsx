import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

const WipeApp = () => {
	const { auth, isLoading, error, fs, kv } = usePuterStore();
	const navigate = useNavigate();
	const [files, setFiles] = useState<FSItem[]>([]);

	const loadFiles = async () => {
		const files = (await fs.readDir("./")) as FSItem[];
		setFiles(files);
	};

	useEffect(() => {
		loadFiles();
	}, []);

	useEffect(() => {
		if (!isLoading && !auth.isAuthenticated) {
			navigate("/auth?next=/wipe");
		}
	}, [isLoading]);

	const handleDelete = async () => {
		files.forEach(async (file) => {
			await fs.delete(file.path);
		});
		await kv.flush();
		loadFiles();
		navigate("/");
	};

	if (isLoading) {
		return <div className="text-center text-lg">Loading...</div>;
	}

	if (error) {
		return <div className="text-red-500 text-center">Error: {error}</div>;
	}

	return (
		<div className="p-6 bg-gray-100 rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-4">
				Authenticated as: {auth.user?.username}
			</h1>
			<h2 className="text-xl mb-2">Existing files:</h2>
			<div className="flex flex-col gap-4">
				{files.map((file) => (
					<div
						key={file.id}
						className="flex flex-row justify-between items-center p-2 bg-white rounded-md shadow-sm"
					>
						<p className="text-lg">{file.name}</p>
					</div>
				))}
			</div>
			<div className="mt-4">
				<button
					className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-200"
					onClick={() => handleDelete()}
				>
					Wipe App Data
				</button>
			</div>
		</div>
	);
};

export default WipeApp;
