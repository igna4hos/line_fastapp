document.addEventListener("DOMContentLoaded", async () => {
    const liffId = "YOUR_LIFF_ID"; // SWAP ON MY LIFF ID.
    
    try {
      await liff.init({ liffId });
      console.log("LIFF initialized");
      
      if (!liff.isLoggedIn()) {
        document.getElementById("login-btn").addEventListener("click", () => {
          liff.login(); // Redirect on login page
        });
      } else {
        displayUserInfo();
      }
    } catch (error) {
      console.error("LIFF initialization failed", error);
    }
  });

  async function displayUserInfo() {
    try {
      const profile = await liff.getProfile();
      console.log(profile);
  
      // Обновление UI
      document.getElementById("login-btn").style.displsay = "none";
      document.getElementById("user-info").style.display = "block";
      document.getElementById("user-picture").src = profile.pictureUrl;
      document.getElementById("user-name").textContent = profile.displayName;
      document.getElementById("user-id").textContent = profile.userId;
    } catch (error) {
      console.error("Failed to get user profile", error);
    }
  }
  