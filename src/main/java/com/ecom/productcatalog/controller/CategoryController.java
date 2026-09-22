package com.ecom.productcatalog.controller;

import com.ecom.productcatalog.model.Category;
import com.ecom.productcatalog.service.CategoryService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/categories")
@CrossOrigin(origins = "http://localhost:5173")
public class CategoryController {

    private final CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping
    public List<Category> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @PostMapping
    public Category createCategory(@RequestBody Category category){
        return categoryService.createCategory(category);
    }
}
