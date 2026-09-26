function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>

      {students.map((student, index) => (
        <div key={index}>
          <p>Name: {student.name}</p>
          <p>Age: {student.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default StudentList;