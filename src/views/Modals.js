const modalMessages = () => `<div class="modal fade" id="messages">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title modal_messages">Message</h5>
        </div>
        <div class="modal-body">
          <p class="modal_messages_body success">
               Game created successfully
          </p>
        </div>
      </div>
    </div>
  </div>`;

const modalSetup = () => `<div class="modal fade" id="setupFormModal" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Leaderboard Setup</h5>
          </div>
          <div class="modal-body">
           <form method="post" id="setupLeaderBoard" class="my-4">
              <div class="mb-3">
                  <input type="text" class="form-control" id="gameName" placeholder="What's the name of your game (min 2 chars)" maxlength="20" required>
              </div>
              <div class="mb-3">
                  <button type="submit" id="submitSetup" class="btn btn-primary">
                      Get started
                      <span class="spinner-border spinner-border-sm hide" id="setupSpinner" role="status" aria-hidden="true"></span>
                  </button>
              </div>
              <div class="mb-3 hide createGameMsg">
                  Name of game is required (min 2 chars)
              </div>
          </form>
          </div>
        </div>
      </div>
    </div>`;

export { modalMessages, modalSetup };
