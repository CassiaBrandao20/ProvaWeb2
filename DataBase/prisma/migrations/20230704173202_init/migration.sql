-- CreateTable
CREATE TABLE "categorias" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "produtos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    CONSTRAINT "produtos_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "categorias" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
