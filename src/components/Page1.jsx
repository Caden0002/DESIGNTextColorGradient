const text1 = "Text Color Gradient";

function Page1(props) {
  return (
    <div className="relative min-h-screen flex bg-black">
      <div className="container max-w-screen-xl mx-auto flex flex-col justify-center items-center space-y-24">
        <div className="text-6xl text-white font-bold flex">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-sky-600">
            {text1}
          </div>
          &nbsp;with Tailwind CSS
        </div>
        <div className="text-6xl text-white font-bold flex">
          Text&nbsp;
          <div
            style={{
              background: '-webkit-linear-gradient(184deg, #33FF00 0%, #00FF0A 13%, #FCFF66 28%, #FF0000 43%, #FFE500 58%, #00E0FF 70%, #FF549C 87%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'rgba(255, 255, 255, 0.3)',
            }}
          >
            Colooooooor
          </div>
          &nbsp;Gradient with WebKit
        </div>
      </div>
    </div>
  );
}

export default Page1;
