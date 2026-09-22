package com.ecom.productcatalog.config;

import com.ecom.productcatalog.model.Category;
import com.ecom.productcatalog.model.Product;
import com.ecom.productcatalog.repository.CategoryRepository;
import com.ecom.productcatalog.repository.ProductRepository;
import com.ecom.productcatalog.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final UserRepository userRepository;

    public DataSeeder(ProductRepository productRepository, CategoryRepository categoryRepository, UserRepository userRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        productRepository.deleteAll();
        categoryRepository.deleteAll();
//        userRepository.deleteAll();

        Category ps5Games = new Category();
        ps5Games.setName("Playstation 5 Games");

        Category nintendoGames = new Category();
        nintendoGames.setName("Nintendo Games");

        Category pcGaming = new Category();
        pcGaming.setName("PC Gaming");

        categoryRepository.saveAll(Arrays.asList(ps5Games, nintendoGames, pcGaming));


        Product phone = new Product();
        phone.setName("The Blood of the Dawnwalker PS5");
        phone.setDescription("desc");
        phone.setImageUrl("https://www.zelda.hr/image/cache/catalog/ps5-igre/the-blood-of-the-dawnwalker-day-one-edition-ps5-986x1100w.jpg");
        phone.setPrice(69.99);
        phone.setCategory(ps5Games);

        Product laptop = new Product();
        laptop.setName("Marvel's Wolverine PS5");
        laptop.setDescription("desc");
        laptop.setImageUrl("https://www.zelda.hr/image/cache/catalog/ps5-igre/marvel-wolverine-ps5-986x1100w.jpg");
        laptop.setPrice(79.99);
        laptop.setCategory(ps5Games);

        Product jacket = new Product();
        jacket.setName("Sid Meier's Civilization VII Nintendo Switch");
        jacket.setDescription("desc");
        jacket.setImageUrl("https://www.zelda.hr/image/cache/catalog/switch-igre/sid-meiers-civilization-vii-switch-986x1100w.jpg");
        jacket.setPrice(39.99);
        jacket.setCategory(nintendoGames);

        Product mixer = new Product();
        mixer.setName("White Shark GM-5012 Lionel Wireless White Mouse");
        mixer.setDescription("desc");
        mixer.setImageUrl("https://www.zelda.hr/image/cache/catalog/gaming-mis/white-shark-lionel-white-1-986x1100w.jpg");
        mixer.setPrice(34.99);
        mixer.setCategory(pcGaming);

        productRepository.saveAll(Arrays.asList(phone, laptop, jacket, mixer));
    }
}
