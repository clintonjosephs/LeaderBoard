const AddScores = () => `<div class="col-md-6 col-sm-12">
            <div class="addContainer">
                <h3 class="text-center">Add your score</h3>
                <form method="post" id="addScoreForm" class="my-4">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="nameField" placeholder="Add your name" maxlength="20" required>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="scoreField" placeholder="Add your score" maxlength="6" pattern="[0-9]+" required>
                    </div>
                    <div class="mb-3">
                        <button type="submit" id="submitScore" class="btn btn-primary">Add Score</button>
                    </div>
                </form>
            </div>
        </div>`;

export default AddScores;
