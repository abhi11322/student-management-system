import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "./services/studentService";

function App() {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const loadStudents = async () => {
    const data = await getStudents();
    setStudents(data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleSave = async (student) => {
    if (student.id) {
      await updateStudent(student.id, student);
    } else {
      await createStudent(student);
    }
    setSelectedStudent(null);
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>Student Management</h2>

      <StudentForm
        onSave={handleSave}
        selectedStudent={selectedStudent}
      />

      <StudentList
        students={students}
        onEdit={setSelectedStudent}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
