package com.deftshadow.schedyoule.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Document
public class User {
    @Id
    private String id;
    @Indexed(unique = true)
    @NotNull
    @Size(min = 6, max = 30)
    private String username;
    @NotNull
    @Size(min = 6, max = 30)
    private String password;
}
