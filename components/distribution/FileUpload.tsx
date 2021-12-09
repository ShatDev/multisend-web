/* eslint-disable jsx-a11y/anchor-is-valid */
const FileUpload = () => (
  <div className="border-dashed border-2 border-yellow-500 mr-4 md:w-full lg:w-full  bg-yellow-100 rounded-2xl p-8 flex items-center justify-center flex-col md:ml-auto w-full mt-10 md:mt-0 h-64">
    <img src="/images/upload_icon.png" alt="upload_icon" className="h-16 w-16 mb-4" />
    <div className="text-sm text-black mb-4">
      Drag and Drop or <a className="text-blue-500">Browse</a> to upload
    </div>
    <div className="text-sm text-green-400">Accepted: CSV / XLS / XLSX</div>
  </div>
);

export default FileUpload;
