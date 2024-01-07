import { Rating } from "@material-tailwind/react";

export default function DefaultRating() {
  return <Rating className="w-3 h-3" value={Math.floor(Math.random() * 5) + 1} />;
}
