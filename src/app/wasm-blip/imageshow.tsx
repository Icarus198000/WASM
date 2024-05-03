
const ImageShow: React.FC = () => {

    return (
        <section className="container w-full mx-auto items-center py-16">
            <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
                <div className="px-4 py-6">
                    <div id="image-preview" className="max-w-sm h-[220px] flex justify-center p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center">
                        <span>Please select an image</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageShow;
