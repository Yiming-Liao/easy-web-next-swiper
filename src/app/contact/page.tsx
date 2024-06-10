export default function Home() {
  return (

    <main className="w-full min-h-screen flex flex-col justify-center items-center">
      <section className="w-full h-screen relative overflow-hidden z-0 flex flex-col "
        style={{ backgroundImage: 'url("/images/1.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="h-48 bg-white">blank</div>
        <div className="h-48 bg-white mt-auto">
          <span className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Hello world
          </span>
        </div>
      </section>

      <section className="w-full h-screen relative overflow-hidden z-1 flex flex-col "
        style={{ backgroundImage: 'url("/images/3.jpg")', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="h-48 bg-white">blank</div>
        <div className="h-48 bg-white mt-auto">blank</div>
      </section>
    </main>





  );
}

