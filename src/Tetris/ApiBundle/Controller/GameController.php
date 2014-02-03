<?php

namespace Tetris\ApiBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class GameController extends Controller
{
    /**
     * @Route("/", name="game_index")
     */
    public function indexAction(Request $request)
    {
        return $this->render('TetrisApiBundle:Game:index.html.twig', array());
    }

    /**
     * @Route("/_mobile", name="game_mobile")
     */
    public function mobileAction(Request $request)
    {
        return $this->render('TetrisApiBundle:Game:mobile.html.twig', array());
    }
}