import { PrismaClient } from ".prisma/client";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthorized Request", { status: 401 });
    }

    const userData = await prisma.codeDoc.findMany({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(userData, { status: 201 });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    const { userId } = auth();
    if (!userId) {
      return new NextResponse("Unauthorized Request", { status: 401 });
    }
    const deleteUser = await prisma.codeDoc.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json(deleteUser, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Internal Server Error", { status: 501 });
  }
}
