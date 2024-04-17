import { useState } from 'react';

const ImageUpload: React.FC = () => {
  const [isEventListenerAdded, setIsEventListenerAdded] = useState<boolean>(false);
  const [fileName, setFileName] = useState<string>('');
  const [imagePreview, setImagePreview] = useState<any>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setFileName(file.name);

      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImagePreview(
          <img src={e.target.result} className="max-h-48 rounded-lg mx-auto" alt="Image preview" />
        );
        const preview = document.getElementById('image-preview');
        if (preview) {
          preview.classList.remove('border-dashed', 'border-2', 'border-gray-400');

          // Add event listener for image preview only once
          if (!isEventListenerAdded) {
            preview.addEventListener('click', () => {
              const uploadInput = document.getElementById('upload');
              if (uploadInput) {
                uploadInput.click();
              }
            });
            setIsEventListenerAdded(true);
          }
        }
      };
      reader.readAsDataURL(file);
    } else {
      setFileName('');
      setImagePreview(
        <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center text-gray-500">
          No image preview
        </div>
      );
      const preview = document.getElementById('image-preview');
      if (preview) {
        preview.classList.add('border-dashed', 'border-2', 'border-gray-400');

        // Remove the event listener when there's no image
        preview.removeEventListener('click', () => {
          const uploadInput = document.getElementById('upload');
          if (uploadInput) {
            uploadInput.click();
          }
        });
        setIsEventListenerAdded(false);
      }
    }
  };

  const handleUploadClick = (event: React.MouseEvent<HTMLLabelElement>) => {
    event.stopPropagation();
  };

  return (
    <section className="container w-full mx-auto items-center py-16">
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden items-center">
        <div className="px-4 py-6">
          <div id="image-preview" className="max-w-sm p-6 mb-4 bg-gray-100 border-dashed border-2 border-gray-400 rounded-lg items-center mx-auto text-center cursor-pointer">
            <input id="upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            <label htmlFor="upload" className="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-gray-700 mx-auto mb-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
              </svg>
              <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">Upload picture</h5>
              <p className="font-normal text-sm text-gray-400 md:px-6">Choose photo size should be less than <b className="text-gray-600">2mb</b></p>
              <p className="font-normal text-sm text-gray-400 md:px-6">and should be in <b className="text-gray-600">JPG, PNG, or GIF</b> format.</p>
              <span id="filename" className="text-gray-500 bg-gray-200 z-50">{fileName}</span>
            </label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUpload;
