export default function CreateBlog() {
    return (
        <main className="p-3 max-w-4xl mx-auto">
            <h1 className="text-3xl font-semibold text-center my-7">Create a Blog</h1>
            <form className="flex flex-col sm:flex-row gap-4">
                <div className="flex flex-col gap-4 flex-1">
                    <input type="text" placeholder="Name" className="border p-3 rounded-lg" id="name" maxLength="62" minLength="10" required />
                    <textarea type="text" placeholder="Description" className="border p-3 rounded-lg" id="description" required />
                </div>

                <div className="flex flex-col flex-1 gap-4">
                    <p className="font-semibold">Images:
                        <span className="font-normal text-gray-600 ml-2">The first image will be the cover. (max 6)</span>
                    </p>
                    <div className="flex gap-4">
                        <input className="p-3 border border-gray-300 rounded w-full" type="file" id="images" accept="image/*" multiple></input>
                        <button className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">Upload</button>
                    </div>
                    <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Create Blog</button>
                </div>


            </form>

        </main>
    )
}
