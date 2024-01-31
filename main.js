class ProductManager {
    constructor() {
      this.products = [];
      this.productIdCounter = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (![title, description, price, thumbnail, code, stock].every(Boolean)) {
        console.error("Todos los campos son obligatorios.");
        return;
      }
  
      if (this.products.some(product => product.code === code)) {
        console.error("El código ya está en uso. Por favor, elija otro.");
        return;
      }
  
      const newProduct = {
        id: this.productIdCounter++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log(`Producto agregado correctamente. ID: ${newProduct.id}`);
    }
  
    getProducts() {
      return this.products.slice();
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