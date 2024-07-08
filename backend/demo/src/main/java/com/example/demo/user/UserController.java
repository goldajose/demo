package com.example.demo.user;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin
public class UserController {

    @GetMapping
    public ResponseEntity<List<UserDto>> getUsers() {
        List<UserDto> users = new ArrayList<>();
        users.add(new UserDto("John"));
        users.add(new UserDto("Joe"));

        return ResponseEntity.ok(users);
    }
}
