import { Router } from "express";

import { CreateProduto } from "../src/controllers/produtos/CreateProdutoController";
import { DeleteProduto } from "../src/controllers/produtos/DeleteProdutoController";
import { UpdateProduto } from "../src/controllers/produtos/UpdateProdutoController";
import { GetProdutos } from "../src/controllers/produtos/GetProdutosController";

import { CreateCategoria } from "../src/controllers/categorias/CreateCategoriaController";
import { DeleteCategoria } from "../src/controllers/categorias/DeleteCategoriaController";
import { UpdateCategoria } from "../src/controllers/categorias/UpdateCategoriaController";
import { GetCategorias } from "../src/controllers/categorias/GetCategoriasController";


const router = Router();

const createProduto = new CreateProduto();
const deleteProduto = new DeleteProduto();
const updateProduto = new UpdateProduto();
const getProdutos = new GetProdutos();

const createCategoria = new CreateCategoria();
const deleteCategoria = new DeleteCategoria();
const updateCategoria = new UpdateCategoria();
const getCategorias = new GetCategorias();

router.post("/produto", createProduto.handle);
router.delete("/produto/:id", deleteProduto.handle);
router.put("/produto/:id", updateProduto.handle);
router.get("/produtos", getProdutos.handle);

router.post("/categoria", createCategoria.handle);
router.delete("/categoria/:id", deleteCategoria.handle);
router.put("/categoria/:id", updateCategoria.handle);
router.get("/categorias", getCategorias.handle);

export { router };
