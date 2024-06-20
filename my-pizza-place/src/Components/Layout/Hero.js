import Image from "next/image";

export const Hero = () => {
  return (
    <section className="grid grid-cols-2"> 

    <div>
    <h1>Everything is better with Pizza</h1>

<p>MAke you day more fun with our Pizza</p>

    </div>
      
      <div className=" relative">
        <Image
          src={"/pizza.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}; 
