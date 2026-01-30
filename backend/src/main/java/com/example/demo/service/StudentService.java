package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository repository;

    public StudentService(StudentRepository repository) {
        this.repository = repository;
    }

    public Student createStudent(Student student) {
        return repository.save(student);
    }

    public List<Student> getAllStudents() {
        return repository.findAll();
    }

    public Student getStudentById(Long id) {
        return repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Student not found"));
    }

    public void deleteStudent(Long id) {
        repository.deleteById(id);
    }
    public Student updateStudent(Long id, Student updatedStudent) {
    Student existing = repository.findById(id)
            .orElseThrow(() -> new RuntimeException("Student not found"));

    existing.setName(updatedStudent.getName());
    existing.setEmail(updatedStudent.getEmail());
    existing.setCourse(updatedStudent.getCourse());
    existing.setYear(updatedStudent.getYear());

    return repository.save(existing);
}
}
