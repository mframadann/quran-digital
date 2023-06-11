const ModalFooter = (props: { handleClick?: () => void }) => {
  return (
    <div className="w-full bg-white border-t-2 py-4 flex gap-2 items-center px-6">
      <button className="px-4 py-2 bg-gray-300 rounded-md text-white text-sm focus:ring-4 focus:ring-gray-300 focus:ring-opacity-30 transition-all duration-300">
        Batal
      </button>
      <button
        type="submit"
        className="px-4 py-2 bg-primary rounded-md text-white text-sm focus:ring-4 focus:ring-primary focus:ring-opacity-30 transition-all duration-300"
      >
        Dengar
      </button>
    </div>
  );
};

export default ModalFooter;
