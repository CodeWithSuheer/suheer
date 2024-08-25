const Loader = () => {
  return (
    <>
      <section className="fixed left-0 right-0 top-0 flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#252525]">
        <div className="spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
    </>
  );
};

export default Loader;
