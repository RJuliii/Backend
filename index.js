class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que todos los campos sean obligatorios
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      // Validar que el código no esté repetido
      if (this.products.some(product => product.code === code)) {
        console.error("El código ya está en uso. Por favor, elija otro.");
        return;
      }
  
      // Crear un nuevo producto con un id autoincrementable
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      // Agregar el producto al arreglo de productos
      this.products.push(newProduct);
  
      console.log(`Producto agregado correctamente. ID: ${newProduct.id}`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
  
      if (product) {
        return product;
      } else {
        console.error("Producto no encontrado. ID no válido.");
      }
    }
  }
  
  // Ejemplo de uso:
  const productManager = new ProductManager();
  
  productManager.addProduct("Producto 1", "Descripción del producto 1", 29.99, "imagen1.jpg", "P001", 50);
  productManager.addProduct("Producto 2", "Descripción del producto 2", 39.99, "imagen2.jpg", "P002", 30);
  
  const allProducts = productManager.getProducts();
  console.log("Todos los productos:", allProducts);
  
  const productIdToSearch = 2;
  const foundProduct = productManager.getProductById(productIdToSearch);
  console.log(`Producto con ID ${productIdToSearch}:`, foundProduct);
  