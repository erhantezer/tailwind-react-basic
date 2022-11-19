
import './App.css';

function App() {
  return (
    <div className="flex flex-col justify-center h-screen items-center font-acme">
      <div className="grid border-4 border-red-600 grid-cols gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="div w-60 border-8 border-orange-900 h-96 ">
          <h1 className="text-3xl text-center font-bold underline text-orange-500 ">
            Hello world!
          </h1>
        </div>
        <div className="div2 w-36 h-[9rem] mt-9 bg-green-500 text-center">div2</div>
        <div className="div3 w-36 h-36 mt-9 text-center bg-cyan-500">div3</div>
      </div>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
