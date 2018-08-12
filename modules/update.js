
    function update () {

        //player.setVelocityX(0)

        if (cursors.left.isDown)
         {
             if (gravityState == 'down' || gravityState == 'up'){
                player.setVelocityX(-250);
             } else if (gravityState == 'right' || gravityState == 'left'){
                player.setVelocityY(-250);
             }
         }
        else if (cursors.right.isDown)
        {
            if (gravityState == 'down' || gravityState == 'up'){
               player.setVelocityX(250);
            } else if (gravityState == 'right' || gravityState == 'left'){
               player.setVelocityY(250);
            }
        }


        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
           player.setVelocityY(-400);
        }
        if (gravityUp.isDown)
        {
            player.body.setGravityY(-500);
            player.body.setGravityX(0);
            obsticle.body.setGravityY(-500);
            obsticle.body.setGravityX(0);
            gravityState = 'up';
        }
        if (gravityDown.isDown)
        {
            player.body.setGravityY(500);
            player.body.setGravityX(0);
            obsticle.body.setGravityY(500);
            obsticle.body.setGravityX(0);
            gravityState = 'down';
        }
        if (gravityLeft.isDown)
        {
            player.body.setGravityY(0);
            player.body.setGravityX(-500);
            obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(-500);
            gravityState = 'left';
        }
        if (gravityRight.isDown)
        {
            player.body.setGravityY(0);
            player.body.setGravityX(500);
            obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(500);
            gravityState = 'right';
        }
    }


