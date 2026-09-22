package com.ecom.productcatalog.controller;

import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private final ProductService productService;


    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/category/{categoryId}")
    public List<Product> getProductsByCategory(@PathVariable Long categoryId){
        return productService.getProductByCategory(categoryId);
    }

    @GetMapping("/{productId}")
    public Product getProductById(@PathVariable Long productId){
        return productService.getProductById(productId);
    }

    @PostMapping("/category/{categoryId}")
    public Product createProduct(
            @PathVariable Long categoryId,
            @RequestBody Product product) {

        return productService.createProduct(categoryId, product);
    }
}
