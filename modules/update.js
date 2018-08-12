
    function update () {
        player.setVelocityX(0)

        if (cursors.left.isDown)
         {
             player.setVelocityX(-250);
         }
        else if (cursors.right.isDown)
        {
             player.setVelocityX(250);
        }


        if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
        {
           player.setVelocityY(-400);
        }
        if (gravityUp.isDown)
        {
            if (cursors.left.isDown )
            {
                player.setVelocityX(-250);
            }
           else if (cursors.right.isDown)
           {
                player.setVelocityX(250);
           }
            player.body.setGravityY(-500);
            player.body.setGravityX(0);
            obsticle.body.setGravityY(-500);
            obsticle.body.setGravityX(0);
        }
        if (gravityDown.isDown)
        {
            if (cursors.left.isDown )
            {
                player.setVelocityX(-250);
            }
           else if (cursors.right.isDown)
           {
                player.setVelocityX(250);
           }
            player.body.setGravityY(500);
            player.body.setGravityX(0);
            obsticle.body.setGravityY(500);
            obsticle.body.setGravityX(0);
        }
        if (gravityLeft.isDown)
        {
            if (cursors.left.isDown )
            {
                player.setVelocityY(-250);
            }
           else if (cursors.right.isDown)
           {
                player.setVelocityY(250);
           }
            player.body.setGravityY(0);
            player.body.setGravityX(-500);
            obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(-500);
        }
        if (gravityRight.isDown)
        {
            if (cursors.left.isDown )
            {
                player.setVelocityY(-250);
            }
           else if (cursors.right.isDown)
           {
                player.setVelocityY(250);
           }
            player.body.setGravityY(0);
            player.body.setGravityX(500);
            obsticle.body.setGravityY(0);
            obsticle.body.setGravityX(500);
        }
    }


