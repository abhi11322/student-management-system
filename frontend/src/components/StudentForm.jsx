import { useState, useEffect } from "react";

const emptyStudent = {
  name: "",
  email: "",
  course: "",
  year: "",
};

function StudentForm({ onSave, selectedStudent }) {
  const [student, setStudent] = useState(emptyStudent);

  useEffect(() => {
    if (selectedStudent) setStudent(selectedStudent);
  }, [selectedStudent]);

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(student);
    setStudent(emptyStudent);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input name="name" placeholder="Name" value={student.name} onChange={handleChange} />
      <input name="email" placeholder="Email" value={student.email} onChange={handleChange} />
      <input name="course" placeholder="Course" value={student.course} onChange={handleChange} />
      <input name="year" placeholder="Year" value={student.year} onChange={handleChange} />

      <button type="submit">
        {student.id ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;
