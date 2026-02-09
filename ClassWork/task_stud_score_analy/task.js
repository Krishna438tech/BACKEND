function analyzeScores(scoresArray) {
    let excellentCount = 0;
    let passCount = 0;
    let failCount = 0;

    let totalScore = 0;
    let validStudents = 0;

    for (let i = 0; i < scoresArray.length; i++) {
        // Convert to number
        let score = Number(scoresArray[i]);

        // Ignore NaN values
        if (isNaN(score)) {
            continue;
        }

        // Count valid student
        validStudents++;
        totalScore += score;

        // Categorize score
        if (score >= 90) {
            excellentCount++;
        } else if (score >= 60) {
            passCount++;
        } else {
            failCount++;
        }

        // Ternary operator (mandatory use)
        let category = score >= 60 ? "Passed Basic Check" : "Failed Basic Check";
    }

    // Calculate average
    let average = validStudents === 0 
        ? 0 
        : Number((totalScore / validStudents).toFixed(2));

    // Return result object
    return {
        totalStudents: validStudents,
        excellent: excellentCount,
        pass: passCount,
        fail: failCount,
        averageScore: average
    };
}

// Expected usage
const scores = ["85", 92, "67", 40, 100, "30", 76, "90"];
const result = analyzeScores(scores);
console.log(result);
