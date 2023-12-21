import { PrismaClient } from ".prisma/client";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  const { userId } = auth();

  if (!userId) {
    return NextResponse.json("Unauthorized Request", { status: 401 });
  }

  console.log(code);

  try {
    const newdocument = await prisma.codeDoc.create({
      data: {
        document: code,
        userId: userId,
      },
    });

    return NextResponse.json(newdocument, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
