import { Rating } from "@material-tailwind/react";

export default function DefaultRating() {
  return <Rating value={Math.floor(Math.random() * 5) + 1} />;
}
