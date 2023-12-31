import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  const url = req.url;

  const docId = url.split("/")[6];

  try {
    const getData = await prisma.codeDoc.findFirst({
      where: {
        id: docId,
      },
    });

    if (!getData) {
      return NextResponse.json("Data does not exist", { status: 404 });
    }

    return NextResponse.json(getData, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 501 });
  }
}
