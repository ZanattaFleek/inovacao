import { useRouteError } from "react-router-dom";

export default function ErroAplicacao() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Esta página não existe!</h1>
    </>
  );
}