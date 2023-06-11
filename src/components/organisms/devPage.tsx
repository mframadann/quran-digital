import { Modal } from "../atoms";
import { SearchIcon } from "../icons";

const DevPage = () => {
  return (
    <>
      <Modal>
        <div className="w-modalPlayAudioMobile h-modalPlayAudioMobile bg-white rounded-10 py-6 px-4">
          <div className="w-full group p-3 px-4 h-12 rounded-full flex gap-2 border border-gray-400 focus-within:border-primary focus-within:ring-4 focus-within:ring-primary focus-within:ring-opacity-10 transition-all duration-300">
            <SearchIcon />
            <input
              type="search"
              className="w-full outline-none placeholder:text-sm text-gray-500"
              placeholder="Cari surat yang ingin anda baca"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DevPage;
