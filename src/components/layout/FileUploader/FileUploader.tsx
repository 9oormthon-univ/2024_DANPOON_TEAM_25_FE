export const FileUploader = () => {
  return (
    <div className={`flex flex-col gap-1`}>
      {/* <span className="text-sm font-semibold">파일 선택</span> */}

      <form
        method="post"
        encType="multipart/form-data"
        className="border border-gray-300 rounded-xl bg-white flex justify-between items-center"
      >
        <input
          type="file"
          id="file"
          name="file"
          multiple
          className="py-2 px-3"
        />
      </form>
    </div>
  );
};
