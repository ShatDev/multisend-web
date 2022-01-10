import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

function MyDropzone() {
  const onDrop = useCallback(() => {
    // Do something with the files
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className="drop_zone border-2 mt-2 flex flex-col justify-center items-center py-28 cursor-pointer"
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <img src="/images/dropzone.png" alt="dropzone" />
    </div>
  );
}

export default MyDropzone;
