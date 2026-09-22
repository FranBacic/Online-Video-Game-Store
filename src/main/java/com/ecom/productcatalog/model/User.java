package com.ecom.productcatalog.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;

    @Column(nullable = false, unique = true)
    private String email;

    private String password;

//    @ManyToOne
//    @JoinColumn(name = "category_id", nullable = false)
//    private Category category;
}

