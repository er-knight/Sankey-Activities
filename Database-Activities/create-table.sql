USE Company;

DROP TABLE IF EXISTS Employee;

CREATE TABLE Employee (
	employee_id INT AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50),
    contact_number CHAR(10),
    email VARCHAR(50) NOT NULL,
    joining_date DATE NOT NULL,
	address VARCHAR(100),
    is_project_allocated BOOL DEFAULT FALSE,
    PRIMARY KEY (employee_id)
);
