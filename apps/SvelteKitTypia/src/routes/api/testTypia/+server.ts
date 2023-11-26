// http://localhost:5173/api/testTypia
import typia, { tags } from "typia";
import type { RequestHandler } from "@sveltejs/kit";

interface IMember {
  id: string;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}

export const GET: RequestHandler = async () => {
  const exampleMember = {
    id: "qsdqsdqsd",
    email: "samchon.github@gmai19l.com",
    age: 30,
  };
  const exampleNotMember = {
    id: ">3",
    email: "samchon.github@",
    age: "bbb",
  };

  const matched: boolean = typia.is<IMember>(exampleMember);
  const notMatched: boolean = typia.is<IMember>(exampleNotMember);

  console.log(
    "typia.is<IMember>(exampleNotMember)",
    typia.is<IMember>(exampleNotMember)
  );
  console.log("typia.is<boolean>('a string')", typia.is<boolean>("a string"));

  const loadedTypia = `typia.ts loaded and matched is ${matched} (expected: true) & notMatched is ${notMatched} (expected: false)`;

  return new Response(JSON.stringify(loadedTypia), {
    status: 200,
  });
};
