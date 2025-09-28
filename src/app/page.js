import Image from "next/image";
import {getImages} from './actions/getImages';

export default async function Home() {
  const imageUrl = await getImages();
  return (
    <div className="w-[200px] aspect-3/4 flex flex-col justify-center items-center">
      <img src={imageUrl} />
    </div>
  );
}
