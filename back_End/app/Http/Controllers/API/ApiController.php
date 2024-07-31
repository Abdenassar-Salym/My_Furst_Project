<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Validator;

class ApiController extends Controller
{
     public function rejester(Request $request)
    {
        $validateReq=Validator::make(
          $request->all(),
          [
            "name"=>"required",
            "email"=>"required|email|unique:users,email",
            "password"=>"required",
          ]
        );
        if($validateReq->fails()){
            return response()->json([
                "status"=>false,
                "message"=>"validate erur",
                "errors"=>$validateReq->errors()
            ]);
        }
        return response()->json([
            "message"=>"user created sucssefuly"
        ]);
    }
}
