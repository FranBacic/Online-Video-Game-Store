package com.ecom.productcatalog.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public void sendPasswordResetEmail(
            String email,
            String resetLink) {

        SimpleMailMessage message = new SimpleMailMessage();

        message.setFrom(fromEmail);
        message.setTo(email);
        message.setSubject("Shoply - Password Reset");

        message.setText(
                "Hello,\n\n" +
                        "We received a request to reset your Shoply password.\n\n" +
                        "Click the link below to choose a new password:\n\n" +
                        resetLink + "\n\n" +
                        "This link will expire in 15 minutes.\n\n" +
                        "If you did not request a password reset, " +
                        "you can safely ignore this email.\n\n" +
                        "Best regards,\n" +
                        "Shoply"
        );

        mailSender.send(message);
    }
}