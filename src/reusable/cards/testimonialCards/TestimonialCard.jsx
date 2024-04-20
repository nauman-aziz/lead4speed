import * as React from "react";

function TestimonialCard() {
  return (
    <div className="flex flex-col grow items-center pt-12 w-full bg-white rounded-[30px] max-md:mt-8 max-md:max-w-full border">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/868b8c7e8402fb91f8c669107d66f3d9f6c10232ca5f97b92f4f3de3630009e9?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
        className="border-sky-800 border-solid aspect-[1.3] border-[20px] stroke-[20px] stroke-sky-800 w-[52px]"
      />
      <div className="mt-12 text-lg leading-9 text-center text-zinc-800 max-md:mt-10 max-md:max-w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </div>
      <div className="flex gap-4 mt-16 max-md:mt-10">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9757f2633979de4665f80299b3367ae66bd396f92af4cbff00de162503b9815?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
          className="shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/526dc5386a95cbc9ef0c5bbec44c01f1e64ff0fea0eabc28b8915d2fbc0edad2?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
          className="shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/526dc5386a95cbc9ef0c5bbec44c01f1e64ff0fea0eabc28b8915d2fbc0edad2?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
          className="shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/526dc5386a95cbc9ef0c5bbec44c01f1e64ff0fea0eabc28b8915d2fbc0edad2?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
          className="shrink-0 w-6 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/526dc5386a95cbc9ef0c5bbec44c01f1e64ff0fea0eabc28b8915d2fbc0edad2?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
          className="shrink-0 w-6 aspect-square"
        />
      </div>
      <div className="self-stretch px-16 py-6 mt-8 rounded-none bg-slate-100 max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e80cfbf3fa5f1967faa79d6e82b993efbdefbed32851d1581ef1347c02d96cb1?apiKey=7d405dfd16d04cc09b1228b2b600b47a&"
              className="shrink-0 w-14 rounded-full aspect-square max-md:mt-10"
            />
          </div>
          <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10">
              <div className="text-base font-semibold text-zinc-800">
                Robert Johnson
              </div>
              <div className="mt-3 text-sm text-zinc-800 text-opacity-80">
                Manager, Sherlock Homes LLC
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TestimonialCard;

