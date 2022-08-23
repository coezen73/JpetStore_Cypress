describe('Example to Demonstrate SQL DB Testing in Cypress', () => {

 // Here we are using the CREATE TABLE SQL statement to create a ‘Persons’ table with the following fields – PersonalID, 
 // First_Name, Last_Name, Address, City   
    it('Create a Table', function () {
        cy.task('queryDb', "CREATE TABLE Persons (PersonalID int, First_Name varChar(255),Last_Name varchar(255),Address varchar(255),City varchar(255))")
    })
// Here we are using the INSERT INTO SQL statement to insert new records in the ‘Persons’ table. And after that, 
// we are asserting that ‘result.affectedRows’ is equal to 4.

    it('Input Entries into the table', function () {
        cy.task('queryDb', `INSERT INTO Persons (PersonalID, First_Name, Last_Name, Address, City) VALUES
        (001, "Cemil", "Özen", "Rösrather Str 113", "Köln"),
        (002, "Kira", "Akimova","Rösrather Str 113", "Köln"),
        (003, "Arina", "Akimova", "Mendeleyev Str 72", "Moskau"),
        (004, "Nicole Selin", "Özen", "Göksu Evleri 11", "Istanbul");`).then((result) => {
            expect(result.affectedRows).to.equal(4)
        })
    })

/* Here we are using the UPDATE SQL statement to update an entry into the table. 
   Then we are validating ‘result.changedRows’ to be equal to 1. 
   Then using the SELECT SQL statement we are retrieving the changed value and 
   validating it using ‘result[0].FirstName’.     */ 

    it('Update an Entry into the table and verify', function () {
        cy.task('queryDb', `UPDATE Persons SET First_Name = "Mikail") WHERE City = "Istanbul"`).then((result) => {
            expect(result.changedRows).to.equal(1)
        })
        cy.task('queryDb', `SELECT First_Name FROM Persons Where City = "Istanbul"`).then((result) => {
            expect(result[0].First_Name).to.equal('Kevin')
        })
    })

// Here we are retrieving the row count using the SELECT COUNT(*) SQL statement. 
// And after that, we are asserting that ‘result[0].rowCount’ is equal to 1.

    it('Verify that tehere is only one row where the City is Moskau', function () {
        cy.task('queryDb', `SELECT COUNT(*) as "rowCount" FROM Persons WHERE City = "Moskau"`).then((result) => {
            expect(result[0].rowCount).to.equal(1)
        })
    })

 // Here we are using the DROP SQL statement to delete the table completely and 
 // validating that ‘result.message’ is empty.  

    it('Delete a Table and Verify', function () {
        cy.task('queryDb', `DROP TABLE Persons`).then((result) => {
            expect(result.message).to.equal("")
        })
    })


})
