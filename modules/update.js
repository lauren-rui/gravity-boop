
    function update () {

        if (cursors.left.isDown)
         {
             if (gravityState == 'down' || gravityState == 'up'){
                player.setVelocityX(-250);
             } else if (gravityState == 'right' || gravityState == 'left'){
                player.setVelocityY(250);
             }
         }
        else if (cursors.right.isDown)
        {
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
        if (gravityUp.isDown)
        {
            slowDownGravityX();
            player.body.setGravityY(-500);
            //player.body.setGravityX(0);
            obsticle.body.setGravityY(-500);
            //obsticle.body.setGravityX(0);
            gravityState = 'up';
            arrowBG = 'arrowBGup';
        }
        if (gravityDown.isDown)
        {
            slowDownGravityX();
            player.body.setGravityY(500);
            //player.body.setGravityX(0);
            obsticle.body.setGravityY(500);
            //obsticle.body.setGravityX(0);
            gravityState = 'down';
            arrowBG = 'arrowBGdown';
        }
        if (gravityLeft.isDown)
        {
            slowDownGravityY();
            //player.body.setGravityY(0);
            player.body.setGravityX(-500);
            //obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(-500);
            gravityState = 'left';
            arrowBG = 'arrowBGleft';
        }

        if (gravityRight.isDown)
        {
            // player.body.setGravityY(0);
            slowDownGravityY();
            player.body.setGravityX(500);
            // obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(500);
            gravityState = 'right';
            arrowBG = 'arrowBGright';
        }

    }

    function slowDownGravityY(Gravity){
        for (i = Gravity; i <= 0; i - 50){
            asynchronousProcess(function() {
                setTimeout(x => x, 200);
                player.body.setGravityY(i);
                obsticle.body.setGravityY(i);
            });
        }
    }
    function slowDownGravityX(Gravity){
        for (i = Gravity; i <= 0; i - 50){
            asynchronousProcess(function() {
                setTimeout(x => x, 200);
                player.body.setGravityX(i);
                obsticle.body.setGravityX(i);
            });
        }
    }
