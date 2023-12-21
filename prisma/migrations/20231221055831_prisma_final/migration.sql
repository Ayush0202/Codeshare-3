-- CreateTable
CREATE TABLE "codeDoc" (
    "id" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    "key" SERIAL NOT NULL,

    CONSTRAINT "codeDoc_pkey" PRIMARY KEY ("id")
);
