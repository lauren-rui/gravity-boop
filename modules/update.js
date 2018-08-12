
    function update () {

        // Arrow key functions (Directs where player moves)
        if (cursors.left.isDown)
         {
             // Checks what the gravity state is and moves player accordingly
             if (gravityState == 'down' || gravityState == 'up'){
                player.setVelocityX(-250);
             } else if (gravityState == 'right' || gravityState == 'left'){
                player.setVelocityY(250);
             }
         }
        else if (cursors.right.isDown)
        {
            // Checks what the gravity state is and moves player accordingly
            if (gravityState == 'down' || gravityState == 'up'){
               player.setVelocityX(250);
            } else if (gravityState == 'right' || gravityState == 'left'){
               player.setVelocityY(-250);
            }
        } // else if (cursors.left.isUp)
        // {
        //     if (gravityState == 'down' || gravityState == 'up'){
        //        player.setVelocityX(0);
        //     } else if (gravityState == 'right' || gravityState == 'left'){
        //        player.setVelocityY(0);
        //     }
        // } else if (cursors.right.isUp)
        // {
        //     if (gravityState == 'down' || gravityState == 'up'){
        //        player.setVelocityX(0);
        //     } else if (gravityState == 'right' || gravityState == 'left'){
        //        player.setVelocityY(0);
        //     }
        // }


        // Makes the jump button work depending on the gavity state/ direction the player is falling
        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
           player.setVelocityY(-400);
        } else if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.up))
        {
           player.setVelocityY(400);
        } else if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.left))
        {
           player.setVelocityX(400);
        } else if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.right))
        {
           player.setVelocityX(-400);
        }

        // Check if player is changing the directions of the gravity
        if (gravityUp.isDown)
        {
            slowDownVelX(player.body.velocityX);
            player.body.setGravityY(-500);
            //player.body.setGravityX(0);
            obsticle.body.setGravityY(-500);
            //obsticle.body.setGravityX(0);
            gravityState = 'up';
            arrowBG = 'arrowBGup';
        }
        if (gravityDown.isDown)
        {
            slowDownVelX(player.body.velocityX);
            player.body.setGravityY(500);
            //player.body.setGravityX(0);
            obsticle.body.setGravityY(500);
            //obsticle.body.setGravityX(0);
            gravityState = 'down';
            arrowBG = 'arrowBGdown';
        }
        if (gravityLeft.isDown)
        {
            slowDownVelY(player.body.velocityY);
            player.body.setGravityY(0);
            player.body.setGravityX(-500);
            obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(-500);
            gravityState = 'left';
            arrowBG = 'arrowBGleft';
        }

        if (gravityRight.isDown)
        {
            player.body.setGravityY(0);
            slowDownVelY(player.body.velocityY);
            player.body.setGravityX(500);
            obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(500);
            gravityState = 'right';
            arrowBG = 'arrowBGright';
        }

    }

    function slowDownVelY(Gravity){
        for (i = Gravity; i <= 0; i - 50){
            setTimeout(function() {
                if (i < 0){
                    i = 0;
                }
                player.body.setVelocityY(i);
            },300);
        }
        // for (i = Gravity; i <= 0; i - 100){
        //     setTimeout(function() {
        //         if (i < 0){
        //             i = 0;
        //         }
        //          obsticle.body.setVelocityY(i);
        //     },300);
        // }
    }
    function slowDownVelX(Gravity){
        for (i = Gravity; i <= 0; i - 50){
            setTimeout(function() {
                if (i < 0){
                    i = 0;
                }
                player.body.setVelocityX(i);
            },300);
        }
        // for (i = Gravity; i <= 0; i - 100){
        //     setTimeout(function() {
        //         if (i < 0){
        //             i = 0;
        //         }
        //          obsticle.body.setGravityX(i);
        //     },300);
        // }
    }
