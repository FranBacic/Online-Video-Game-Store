package com.ecom.productcatalog.service;

import com.ecom.productcatalog.model.Category;
import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.repository.CategoryRepository;
import com.ecom.productcatalog.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;

    public ProductService(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Product> getAllProducts(){
       return productRepository.findAll();
    }

    public List<Product> getProductByCategory(Long categoryId){
        return productRepository.findByCategoryId(categoryId);
    }

    public Product getProductById(Long productId){
        return productRepository.findById(productId)
                .orElseThrow();
    }

    public Product createProduct(Long categoryId, Product product) {
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow();

        product.setCategory(category);

        return productRepository.save(product);
    }
}
